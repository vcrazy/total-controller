<?php

include_once 'modules/Core.php';

class Comments_Post extends Core
{
	public function post($app_useful, $comment)
	{
		$this->db->Execute("
			INSERT INTO comments (app_useful, comment) VALUES (?, ?);
		", array($app_useful, $comment));

		$result = array(
			'ok' => $this->db->Insert_ID() ? 1 : 0
		);

		return $result;
	}
}
