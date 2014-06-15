<?php

class Module
{
	protected $obj;

	public function __call($name, $arguments)
	{
		$include_file_path = 'modules/' . get_called_class() . '/' . $name . '.php';
		$include_file_class = get_called_class() . '_' . $name;

		if(!file_exists($include_file_path))
		{
			throw new Exception("File does not exist", 404);
		}

		include_once $include_file_path;

		$this->obj = new $include_file_class();

		return call_user_func_array(array($this, $name), $arguments);
	}
}
