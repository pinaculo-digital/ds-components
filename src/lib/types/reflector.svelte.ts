type ValidatorResult = string | null;
type ValidatorFn<T> = (v: T) => ValidatorResult;

export class BuildedInput<T> {
  value = $state<T>(null as any);
  display = $state<T>(null as any);
  required: boolean;
  placeholder: T;
  private readonly validator?: ValidatorFn<T>;

  constructor(params: {
    key?: T;
    example: T;
    required: boolean;
    validator?: ValidatorFn<T>;
  }) {
    const { example, required, key, validator } = params;

    const initial = key ?? example;

    this.value = initial;
    this.display = initial;
    this.required = required;
    this.placeholder = example;

    if (validator) {
      this.validator = validator;
    }
  }

  validate(): ValidatorResult {
    if (!this.validator) return null;
    return this.value ? this.validator(this.value) : "";
  }
}