export const IsNullOrEmpty = <T>(value: T | null | undefined): boolean => {
    if (
        value === null ||
        value === undefined ||
        (typeof value === "string" && (value as unknown as string).trim() === "") ||
        (Array.isArray(value) && (value as unknown as Array<T>).length === 0) ||
        (typeof value === "object" && Object.keys(value as object).length === 0)
    ) {
        return true;
    }

    return false;
};
