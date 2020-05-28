import { Event, Severity, EventHint } from '@sentry/browser';
/**
 * Сервис, предоставляющий методы для интеграции с Sentry.IO.
 * @see https://sentry.io/
 */
export declare class Service {
    /**
     * Сохраненная сущность синглтона.
     */
    private static instance;
    /**
     * Возвращает экземпляр синглтона.
     */
    static getInstance<T extends typeof Service>(this: T): InstanceType<T>;
    /**
     * Инициализирует сервис.
     * @param dsn Идентификатор аккаунта, предоставляемый в админ-панели Sentry.
     */
    static initialize(dsn: string): void;
    /**
     * Останавливает работу сервиса и высвобождает все занятые ресурсы.
     */
    static dispose(): void;
    /**
     * Идентификатор аккаунта.
     */
    private readonly dsn?;
    /**
     * Последний присвоенный идентификатор события (используется, когда сервис
     * не подключён к sentry.io).
     */
    private lastId;
    /**
     * Создает экземпляр сервиса. Сервис является синглтоном, не следует вызывать
     * конструктор напрямую.
     * @param dsn Идентификатор аккаунта. Если не указан, все события sentry
     * буду отправляться в браузерную консоль с уровнем 'debug'.
     */
    constructor(dsn?: string);
    /**
     * Закрывает соединение с sentry.
     */
    protected close(): Promise<void>;
    /**
     * Возвращает уникальный идентификатор события.
     */
    private getUniqueId;
    /**
     * Возвращает коллекцию пользовательских свойств экземпляра ошибки.
     * @param error Ошибка.
     */
    protected getErrorProperties(error: Error): Record<string, any>;
    /**
     * Преобразует каждое отправленное через сервис событие.
     * @param event События.
     * @param hint Дополнительная информация о событии.
     */
    protected handleEvent(event: Event, hint: EventHint): Event;
    /**
     * Принудительно отправляет указанную ошибку в sentry и возвращает присвоенный
     * ей идентификатор.
     * @param error Ошибка.
     */
    sendError(error: Error): string;
    /**
     * Отправляет в sentry событие с указанными параметрами и возвращает
     * присвоенный ему идентификатор.
     * @param level Уровень события.
     * @param label Ярлык события.
     * @param message Описание события.
     * @param payload Дополнительные параметры события.
     */
    protected sendEvent(level: Severity, label: string, message: string, payload: Record<string, any>): string;
    /**
     * Отправляет отладочное событие и возвращает присвоенный ему идентификатор.
     * @param label Метка события.
     * @param message Текст события.
     * @param payload Дополнительные параметры события.
     */
    debug(label: string, message: string, payload?: Record<string, any>): string;
    /**
     * Отправляет событие логгирования и возвращает присвоеный ему идентификатор.
     * @param label Метка события.
     * @param message Текст события.
     * @param payload Дополнительные параметры события.
     */
    log(label: string, message: string, payload?: Record<string, any>): string;
    /**
     * Отправляет информационное событие и возвращает присвоеный ему
     * идентификатор.
     * @param label Метка события.
     * @param message Текст события.
     * @param payload Дополнительные параметры события.
     */
    info(label: string, message: string, payload?: Record<string, any>): string;
    /**
     * Отправляет событие предпреждения и возвращает присвоеный ему идентификатор.
     * @param label Метка события.
     * @param message Текст события.
     * @param payload Дополнительные параметры события.
     */
    warning(label: string, message: string, payload?: Record<string, any>): string;
    /**
     * Отправляет событие ошибки и возвращает присвоеный ему идентификатор.
     * @param label Метка события.
     * @param message Текст события.
     * @param payload Дополнительные параметры события.
     */
    error(label: string, message: string, payload?: Record<string, any>): string;
}