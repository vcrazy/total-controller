<?php

include_once 'modules/Module.php';

class Remotes extends Module
{
	public $obj;

	public function __call($name, $arguments)
	{
		return parent::__call($name, $arguments);
	}

	public function get($request_uri)
	{
		list($manufacturer, $device_type) = $request_uri;

		return $this->obj->{__FUNCTION__}($manufacturer, $device_type);
	}
}
