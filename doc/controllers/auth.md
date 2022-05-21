# Auth

```ts
const authController = new AuthController(client);
```

## Class Name

`AuthController`

## Methods

* [Register User](../../doc/controllers/auth.md#register-user)
* [Login User](../../doc/controllers/auth.md#login-user)


# Register User

:information_source: **Note** This endpoint does not require authentication.

```ts
async registerUser(
  body: RegisterUserRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RegisterUserRequest`](../../doc/models/register-user-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: RegisterUserRequest = {
  name: 'abhaywani',
  password: '*****',
  email: 'abahywan@gmail.com',
};

try {
  const { result, ...httpResponse } = await authController.registerUser(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Login User

:information_source: **Note** This endpoint does not require authentication.

```ts
async loginUser(
  body: LoginUserRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`LoginUserRequest`](../../doc/models/login-user-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: LoginUserRequest = {
  email: 'zara@gmail.com',
  password: 'osmanli',
};

try {
  const { result, ...httpResponse } = await authController.loginUser(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

