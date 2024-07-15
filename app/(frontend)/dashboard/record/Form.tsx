"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { z } from "zod"

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { Textarea } from "@/components/ui/textarea"
import { Dialog } from "@/components/ui/dialog"
import { Confirm } from "@/components/ui/confirm"


import { IRecord } from "@/app/(backend)/api/(modules)/record/types"


const formSchema = z.object({
  patrimony:z.string().min(1,{message:"escolha o patrimônio afetado"}),
  user:z.string(),
  action:z.string(),
  date:z.string(),
  obs:z.string().optional(),
})
 
export default function EntityForm({data, close, save, delete_, options}: {data: IRecord, close:() => void, save:(data:IRecord) => void, delete_:(id:number) => void, options:string[]}) {
  // let [selectedItem, setSelectedItem] = useState(data)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patrimony:data.patrimony || "",
      user:data.user || "",
      action:data.action || "",
      date:data.date.replaceAll("/","-").split("-").reverse().join("-") || "",
      obs:data.obs || ""
    },
  })

  console.log()


  function onSubmit(values: z.infer<typeof formSchema>) {
    save({
      id: data.id,
      patrimony:values.patrimony,
      user:values.user,
      action:values.action,
      legacy: "",
      date: values.date.replaceAll("-", "/").split("/").reverse().join("/")|| "",
      obs:values.obs || ""
    })
    
    close()
  }
    
  return (
    <section className="flex w-screen h-screen fixed left-0 justify-center">
      <div onClick={close} className="w-screen h-screen top-0 left-0 backdrop-brightness-75"></div>
      <div className="w-[30rem] max-w-[90vw] max-h-[88vh] overflow-scroll animate-open-b  absolute top-10 z-20 bg-white p-4 rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField control={form.control} name="patrimony" render={({ field }) => (
                <FormItem>
                  <FormLabel>Patrimônio</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o patrimônio referencido" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white divide-y">
                      {options.map(i => (
                        <SelectItem key={i} value={i}>{i}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField control={form.control} name="user" render={({ field }) => (
              <FormItem>
                <FormLabel>Quem</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
            />
            <FormField control={form.control} name="action" render={({ field }) => (
              <FormItem>
                <FormLabel>Ação</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
              </FormItem>
              )}
            />
            <FormField control={form.control} name="date" render={({ field }) => (
              <FormItem>
                <FormLabel>Data</FormLabel>
                <FormControl>
                  <Input type="date" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
            />
            <FormField control={form.control} name="obs" render={({ field }) => (
              <FormItem>
                <FormLabel>Observações</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
            />
            <Button variant={"destructive"} className="px-4 py-1 rounded-lg outline text-red-500 hover:scale-110 transition mr-5" type="button" onClick={close}>Cancelar</Button>
            <Button className="px-4 py-1 rounded-lg text-white hover:scale-110 transition" type="submit" >Confirmar</Button>
            <br />
            {data.id != 0 ?
              <Confirm confirmFunction={() => {delete_(data.id); close()}}>
                <Button className="px-4 py-0 w-full rounded-lg text-white bg-red-500 shadow hover:bg-red-600 transition" type="button" >Deletar</Button>
              </Confirm>
              : ""
            }
          </form>
        </Form>
      </div>
    </section>
  )
}





/*

"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
})

export function SelectForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

*/