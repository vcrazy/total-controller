<?php

include_once 'modules/Module.php';

class Comments extends Module
{
	protected $settings;
	public $obj;

	public function __call($name, $arguments)
	{
		return parent::__call($name, $arguments);
	}

	public function get()
	{
		return $this->obj->{__FUNCTION__}();
	}

	public function post($request_uri, $post_data)
	{
		return $this->obj->{__FUNCTION__}($post_data['app_useful'], $post_data['comment']);
	}
}
