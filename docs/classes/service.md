[@devim-front/react-sentry](../README.md) › [Service](service.md)

# Class: Service

Сервис, предоставляющий методы для интеграции с sentry.io.

**`see`** https://sentry.io/

## Hierarchy

* **Service**

## Index

### Methods

* [debug](service.md#markdown-header-debug)
* [error](service.md#markdown-header-error)
* [info](service.md#markdown-header-info)
* [log](service.md#markdown-header-log)
* [sendError](service.md#markdown-header-senderror)
* [warning](service.md#markdown-header-warning)
* [dispose](service.md#markdown-header-static-dispose)
* [getInstance](service.md#markdown-header-static-getinstance)
* [initialize](service.md#markdown-header-static-initialize)

## Methods

### <a id="markdown-header-debug" name="markdown-header-debug"></a>  debug

▸ **debug**(`label`: string, `message`: string, `payload`: Record‹string, any›): *void*

Отправляет отладочное событие.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`label` | string | - | Метка события. |
`message` | string | - | Текст события. |
`payload` | Record‹string, any› | {} | Дополнительные параметры события.  |

**Returns:** *void*

___

### <a id="markdown-header-error" name="markdown-header-error"></a>  error

▸ **error**(`label`: string, `message`: string, `payload`: Record‹string, any›): *void*

Отправляет событие ошибки.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`label` | string | - | Метка события. |
`message` | string | - | Текст события. |
`payload` | Record‹string, any› | {} | Дополнительные параметры события.  |

**Returns:** *void*

___

### <a id="markdown-header-info" name="markdown-header-info"></a>  info

▸ **info**(`label`: string, `message`: string, `payload`: Record‹string, any›): *void*

Отправляет информационное событие.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`label` | string | - | Метка события. |
`message` | string | - | Текст события. |
`payload` | Record‹string, any› | {} | Дополнительные параметры события.  |

**Returns:** *void*

___

### <a id="markdown-header-log" name="markdown-header-log"></a>  log

▸ **log**(`label`: string, `message`: string, `payload`: Record‹string, any›): *void*

Отправляет событие логгирования.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`label` | string | - | Метка события. |
`message` | string | - | Текст события. |
`payload` | Record‹string, any› | {} | Дополнительные параметры события.  |

**Returns:** *void*

___

### <a id="markdown-header-senderror" name="markdown-header-senderror"></a>  sendError

▸ **sendError**(`error`: Error): *void*

Принудительно отправляет указанную ошибку в sentry.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error` | Error | Ошибка.  |

**Returns:** *void*

___

### <a id="markdown-header-warning" name="markdown-header-warning"></a>  warning

▸ **warning**(`label`: string, `message`: string, `payload`: Record‹string, any›): *void*

Отправляет событие предпреждения.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`label` | string | - | Метка события. |
`message` | string | - | Текст события. |
`payload` | Record‹string, any› | {} | Дополнительные параметры события.  |

**Returns:** *void*

___

### <a id="markdown-header-static-dispose" name="markdown-header-static-dispose"></a> `Static` dispose

▸ **dispose**(): *void*

Останавливает работу сервиса и высвобождает все занятые ресурсы.

**Returns:** *void*

___

### <a id="markdown-header-static-getinstance" name="markdown-header-static-getinstance"></a> `Static` getInstance

▸ **getInstance**<**T**>(`this`: T)

Возвращает экземпляр синглтона.

**Type parameters:**

▪ **T**: *typeof Service*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |

___

### <a id="markdown-header-static-initialize" name="markdown-header-static-initialize"></a> `Static` initialize

▸ **initialize**(`dsn?`: undefined | string): *void*

Инициализирует сервис.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dsn?` | undefined &#124; string | Идентификатор аккаунта, предоставляемый в админ-панели sentry. Если не указан, то сервис будет запущен в демонстрационном режиме: вместо реальной отправки сообщений в sentry будет происходить их логгирование в браузерную консоль с уровнем debug.  |

**Returns:** *void*