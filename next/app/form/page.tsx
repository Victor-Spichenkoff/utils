import { Header } from "@/components/template/header";
import { useForm } from "react-hook-form"
import { SignUpSchem } from "./signupSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DefaultInput } from "./DeafultInput";


export default function Form() {
    const form = useForm<z.infer<typeof SignUpSchem>>({
        resolver: zodResolver(SignUpSchem),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
    })


    function onSubmit(values: z.infer<typeof SignUpSchem>) {
        // ✅ This will be type-safe and validated.

    }

    return (
        <div>
            <Header useBack>Form</Header>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}
                    <DefaultInput form={form}
                        name={"name"}
                        label="Name"
                        placeholder="joe doe..." />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}