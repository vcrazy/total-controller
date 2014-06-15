<?php

include_once 'modules/Module.php';

class Comments extends Module
{
	protected $settings;
	protected $obj;

	public function __call($name, $arguments)
	{
		return parent::__call($name, $arguments);
	}

	protected function get()
	{
		return $this->obj->{__FUNCTION__}();
	}

	protected function post($request_uri, $post_data)
	{
		return $this->obj->{__FUNCTION__}($post_data['app_useful'], $post_data['comment']);
	}
}
