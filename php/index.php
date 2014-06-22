<?php

error_reporting(~E_ALL);

include 'adodb/adodb.inc.php';

$result = array();

$request_uri = urldecode($_SERVER['REQUEST_URI']);

$request_uri = explode('/', $request_uri);

array_shift($request_uri); // remove the starting /

$request_uri = array_filter($request_uri, function($r)
{
	return $r;
});

$method = strtolower($_SERVER['REQUEST_METHOD']);

list($api_version, $module) = $request_uri;

array_shift($request_uri); // remove api version
array_shift($request_uri); // remove module

$api_version = substr($api_version, 1); // remove the 'v'
$module = ucfirst($module);

try
{
	// check api version
	if($api_version < 4 || $api_version > 4)
	{
		throw new Exception("API version not found", 404);
	}

	// check module
	$include_file_path = 'modules/' . $module . '.php';

	if(!file_exists($include_file_path))
	{
		throw new Exception("File does not exist", 404);
	}

	include_once $include_file_path;

	// start module
	$obj = new $module();

	$obj_result = $obj->$method($request_uri, $_POST);

	if(!$obj_result)
	{
		throw new Exception("No data found", 404);
	}

	$result = $obj_result;
}
catch(Exception $ex)
{
//	echo $ex->getCode() . ' ' . $ex->getMessage(); // debug
}

echo json_encode($result, JSON_PRETTY_PRINT);
