import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"

interface IDefaultInput<TSchema extends FieldValues> {
    form: UseFormReturn<TSchema, any, undefined>
    name: Path<TSchema>//garante auto-com. e sem erros
    placeholder?: string
    label?: string
    desc?: string

}

export const DefaultInput =
    <TSchema extends FieldValues>({ form, name, placeholder, label, desc }: IDefaultInput<TSchema>) => {
        return (
            <div className="w-fit">
                <FormField
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{label}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={placeholder}
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                {desc}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        )
    }