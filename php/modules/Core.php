<?php

abstract class Core
{
	protected $db;

	public function __construct()
	{
		$this->db = ADONewConnection('mysqli');
		$this->db->Connect('localhost', 'root', '', 'totaldata');
	}
}
