"use client"

import { Header } from "@/components/template/header";
import { useForm } from "react-hook-form"
import { SignUpSchem } from "./signupSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form
} from "@/components/ui/form"
import { DefaultInput } from "./DeafultInput"
import { Footer } from "@/components/template/footer";


export default function FormScreen() {
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
        console.log("Dados:")
        console.log(values)
    }

    return (
        <div className="flex flex-col items-center">
            <Header useBack>Form</Header>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <DefaultInput form={form}
                        name={"name"}
                        label="Name"
                        placeholder="joe doe..." />

                    <DefaultInput form={form}
                        name={"email"}
                        label="Email"
                        placeholder="joe_doe@mail.com..." />

                    <DefaultInput form={form}
                        name={"password"}
                        label="Password"
                        placeholder="*****" />

                    <div className="flex justify-center">
                        <Button type="submit" variant={"success"}>Submit</Button>
                    </div>
                </form>
            </Form>
            <Footer />
        </div>
    )
}