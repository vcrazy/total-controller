<?php

include_once 'modules/Module.php';

class Remotes extends Module
{
	protected $obj;

	public function __call($name, $arguments)
	{
		return parent::__call($name, $arguments);
	}

	protected function get($request_uri)
	{
		list($manufacturer, $device_type) = $request_uri;

		return $this->obj->{__FUNCTION__}($manufacturer, $device_type);
	}
}
