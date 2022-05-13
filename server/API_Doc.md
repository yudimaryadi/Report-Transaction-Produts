# API PRODUCTS

&nbsp;

## POST /register

>user register

Request : 

- body: 
```json
{
	"email": "String",
	"password": "String",
	"role": "String",
}
```
Response : 

_Response (201 - Create)_
```json
{
	"id": 2,
	"email": "string"
}
```

_Response (500 - Server Disable)_
```json
{
  "message": "Internal Server Error"
}
```
&nbsp;

## POST /login
>user login to get access Token

Request :

- body: 
```json
{
	"email": "String",
	"password": "String",
}
```
Response :


_Response (200 - OKE)_
```json
{
	{
	"access_token": "string",
	"role": "string"
}
}
```
_Response (500 - Server Disable)_
```json
{
	"message": "Internal Server Error"
}
```
&nbsp;

## GET /products
>Get all product

Request: 
- access_token: 
```json
{
	"token": "String"
}
```
Response: 

_Response (200 - oke)_
```json
{
	"products": [
		{
			"id": 1,
			"title": "Sabun Cuci Piring",
			"price": 2000,
			"quantity": "10",
			"status": "Ready",
			"createdAt": "2022-05-12T18:27:52.275Z",
			"updatedAt": "2022-05-12T18:27:52.275Z"
		},
		{
			"id": 2,
			"title": "Shampo",
			"price": 1000,
			"quantity": "10",
			"status": "Ready",
			"createdAt": "2022-05-12T18:27:52.275Z",
			"updatedAt": "2022-05-12T18:27:52.275Z"
		},
		{
			"id": 3,
			"title": "Fanta",
			"price": 5000,
			"quantity": "10",
			"status": "Ready",
			"createdAt": "2022-05-12T18:27:52.275Z",
			"updatedAt": "2022-05-12T18:27:52.275Z"
		},
		{
			"id": 4,
			"title": "coca - cola",
			"price": 8000,
			"quantity": "10",
			"status": "Ready",
			"createdAt": "2022-05-13T08:14:39.264Z",
			"updatedAt": "2022-05-13T08:14:39.264Z"
		}
	],
	"login": {
		"id": 2,
		"email": "kasir@mail.com",
		"role": "kasir"
	}
}
```

_Response (500 - Server Disable)_
```json
{
"message": "server disable"
}
```
&nbsp;

## POST /products
> Create new producta

Request :
- Headers : 
```json
{
	"token": "String"
}
```

- Body : 
```json
{
	"title": "string",
	"price": "Number",
	"quantity": "Number",
	"status": "string",
}
```
_Response (201 - Created)_

```json
{
	"id": 5,
	"title": "tess",
	"price": 8000,
	"quantity": "10",
	"status": "Ready",
	"updatedAt": "2022-05-13T08:15:06.650Z",
	"createdAt": "2022-05-13T08:15:06.650Z"
}
```

_Response (500 - Server Disable)_
```json
{
	"message": "Internal Server Error"
}
```
&nbsp;

## DELETE /products/:productId
> Delete Product by Id

Request :
- Headers : 
```json
{
	"token": "String"
}
```

_Response (200 - OK)_
```json
{
	"message": "product success to delete"
}
```

_Response (404 - Not Found)_
```json
{
	"message": "Not Found"
}
```

_Response (500 - Server Disable)_
```json
{
	"message": "server disable"
}
```
&nbsp;

## PUT /products/:productId
> Update Product by Id

Request : 

- Headers : 
```json
{
	"token" : "string"
}
```

- body : 
```json
{
	"title": "String",
	"price": "Number",
	"quantity": "Number",
	"status": "String",
}
```
_Response (200 - OK)_
```json
[
	{
		"id": 5,
		"title": "Permen Karet",
		"price": 25000,
		"quantity": "10",
		"status": "Ready",
		"createdAt": "2022-05-13T08:15:06.650Z",
		"updatedAt": "2022-05-13T08:19:07.155Z"
	}
]
```

_Response (404 - Not Found)_
```json
{
	"message": "Not Found"
}
```

_Response (500 - Server Disable)_
```json
{
	"message": "server disable"
}
```