<?php

include_once 'modules/Core.php';

class Remotes_Get extends Core
{
	public function get($manufacturer, $device_type)
	{
		$result = NULL;

		if($manufacturer && $device_type)
		{
			$result = $this->get_codes($manufacturer, $device_type);
		}
		elseif($manufacturer)
		{
			$result = $this->get_devices($manufacturer);
		}
		else
		{
			$result = $this->get_manufacturers();
		}

		return $result;
	}

	public function get_manufacturers()
	{
		$data = $this->db->GetCol("
			SELECT manufacturer_name
			FROM manufacturers
				ORDER BY manufacturer_name;
		");

		return $data;
	}

	public function get_devices($manufacturer_name)
	{
		$manufacturer_id = $this->get_manufacturer_id($manufacturer_name);

		$data = $this->db->GetCol("
			SELECT device_type
			FROM codesets
			WHERE manufacturer_id = ?
				GROUP BY device_type
				ORDER BY codeset_id;
		", array($manufacturer_id));

		return $data;
	}

	public function get_codes($manufacturer_name, $device_type)
	{
		$manufacturer_id = $this->get_manufacturer_id($manufacturer_name);

		$data = $this->db->GetAssoc("
			SELECT codeset_id, codeset
			FROM codesets
			WHERE manufacturer_id = ? AND device_type LIKE ?
				ORDER BY codeset_id;
		", array($manufacturer_id, $device_type));

		foreach($data as &$data_value)
		{
			$data_value = json_decode($data_value, TRUE);
		}

		return $data;
	}

	protected function get_manufacturer_id($manufacturer_name)
	{
		$manufacturer_id = $this->db->GetOne("
			SELECT manufacturer_id
			FROM manufacturers
			WHERE manufacturer_name LIKE ?
				LIMIT 1;
		", array($manufacturer_name));

		return $manufacturer_id;
	}
}
