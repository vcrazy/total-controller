<?php

abstract class Core
{
	protected $db;

	public function __construct()
	{
		$this->db = ADONewConnection('mysql');
		$this->db->Connect('localhost', 'root', '', 'totaldata');
	}
}
