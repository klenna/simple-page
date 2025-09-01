// global.d.ts
declare global {
  function AutoLogin(
    name: string,
    email: string,
    phone: string,
    additional_field?: Record<string, unknown>
  ): void;

  function AutoLogout(): void;
}

export {};
