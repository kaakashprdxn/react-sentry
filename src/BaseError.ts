/**
 * Базовый класс ошибки сервиса.
 */
export class BaseError extends Error {
  /**
   * Сообщение об ошибке.
   * @param message Сообщение об ошибке.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'SentryError';
  }
}