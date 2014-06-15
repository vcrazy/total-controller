<?php

include_once 'modules/Core.php';

class Comments_Get extends Core
{
	public function get()
	{
		$data = $this->db->GetAssoc("
			SELECT * FROM comments;
		");

		foreach($data as &$data_value)
		{
			foreach(array_keys($data_value) as $data_value_key)
			{
				if(is_int($data_value_key))
				{
					unset($data_value[$data_value_key]);
				}
			}
		}

		return $data;
	}
}
