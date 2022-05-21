# Jobs API

> Version 1.0

## Path Table

| Method | Path | Description |
| --- | --- | --- |
| POST | [/auth/register](#postauthregister) | Register User |
| POST | [/auth/login](#postauthlogin) | Login User |
| POST | [/jobs](#postjobs) | Create Job |
| GET | [/jobs](#getjobs) | Get All Jobs |
| GET | [/jobs/{id}](#getjobsid) | Get Single Job |
| PATCH | [/jobs/{id}](#patchjobsid) | Update Job |
| DELETE | [/jobs/{id}](#deletejobsid) | Delete Job |

## Reference Table

| Name | Path | Description |
| --- | --- | --- |
| RegisterUserRequest | [#/components/schemas/RegisterUserRequest](#componentsschemasregisteruserrequest) |  |
| LoginUserRequest | [#/components/schemas/LoginUserRequest](#componentsschemasloginuserrequest) |  |
| CreateJobRequest | [#/components/schemas/CreateJobRequest](#componentsschemascreatejobrequest) |  |
| UpdateJobRequest | [#/components/schemas/UpdateJobRequest](#componentsschemasupdatejobrequest) |  |
| httpBearer | [#/components/securitySchemes/httpBearer](#componentssecurityschemeshttpbearer) |  |

## Path Details

***

### [POST]/auth/register

- Summary  
Register User

- Security  

#### RequestBody

- application/json

```ts
{
  name: string
  email: string
  password: string
}
```

#### Responses

- 200 

***

### [POST]/auth/login

- Summary  
Login User

- Security  

#### RequestBody

- application/json

```ts
{
  email: string
  password: string
}
```

#### Responses

- 200 

***

### [POST]/jobs

- Summary  
Create Job

#### RequestBody

- application/json

```ts
{
  company: string
  position: string
}
```

#### Responses

- 200 

***

### [GET]/jobs

- Summary  
Get All Jobs

#### Responses

- 200 

***

### [GET]/jobs/{id}

- Summary  
Get Single Job

#### Responses

- 200 

***

### [PATCH]/jobs/{id}

- Summary  
Update Job

#### RequestBody

- application/json

```ts
{
  company: string
  position: string
}
```

#### Responses

- 200 

***

### [DELETE]/jobs/{id}

- Summary  
Delete Job

#### Responses

- 200 

## References

### #/components/schemas/RegisterUserRequest

```ts
{
  name: string
  email: string
  password: string
}
```

### #/components/schemas/LoginUserRequest

```ts
{
  email: string
  password: string
}
```

### #/components/schemas/CreateJobRequest

```ts
{
  company: string
  position: string
}
```

### #/components/schemas/UpdateJobRequest

```ts
{
  company: string
  position: string
}
```

### #/components/securitySchemes/httpBearer

```ts
{
  "type": "http",
  "scheme": "bearer"
}
```