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


import { IPatrimony } from "@/app/(backend)/api/(modules)/patrimony/types"
import { Textarea } from "@/components/ui/textarea"
import { Dialog } from "@/components/ui/dialog"
import { Confirm } from "@/components/ui/confirm"


const formSchema = z.object({
  type: z.string().min(2, {message: "Muito curto",}).max(100, {message:"Muito longo"}),
  model: z.string().min(2, {message: "Muito curto",}),
  location: z.enum(["Primavera", "Sapiens", "Usuário"]),
  area: z.enum(["Coworking", "Eventos", "Financeiro", "RH", "Comunicação", "Não designado"]),
  situation: z.enum(["Estoque", "Em uso", "Manutenção", "Descarte"]),
  user: z.string().optional(),
  obs: z.string().optional()
})
 
export default function EntityForm({data, close, save, delete_}: {data: IPatrimony, close:() => void, save:(data:IPatrimony) => void, delete_:(id:string) => void}) {
  // let [selectedItem, setSelectedItem] = useState(data)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: data.type || "",
      model: data.model || "",
      location: data.location || "Primavera",
      area: data.area || "Não designado",
      situation: data.situation || "Estoque",
      user: data.user || "",
      obs: data.obs || ""
    },
  })
 
  // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      save({
        id: data.id,
        type: values.type,
        model: values.model,
        location: values.location,
        area: values.area,
        situation: values.situation,
        user: values.user || "",
        obs: values.obs || ""
      })
      close()
    }

  return (
    <section className="flex w-screen h-screen fixed left-0 justify-center">
      <div onClick={close} className="w-screen h-screen top-0 left-0 backdrop-brightness-75"></div>
      <div className="w-[30rem] max-w-[90vw] max-h-[88vh] overflow-scroll animate-open-b  absolute top-10 z-20 bg-white p-4 rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField control={form.control} name="type" render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
            />
            <FormField control={form.control} name="model" render={({ field }) => (
              <FormItem>
                <FormLabel>Modelo</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
            />
            <FormField control={form.control} name="location" render={({ field }) => (
              <FormItem>
                <FormLabel>Local</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione onde se localiza" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white opacity-90">
                    <SelectItem value=" ">Selecione onde se localiza</SelectItem>
                    <SelectItem value="Primavera">Primavera</SelectItem>
                    <SelectItem value="Sapiens">Sapiens</SelectItem>
                    <SelectItem value="Usuário">Usuário</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription className="opacity-50">
                  Onde está localizado?
                </FormDescription>
                <FormMessage />
              </FormItem>
              )}
            />
            <FormField control={form.control} name="area" render={({ field }) => (
              <FormItem>
                <FormLabel>Área</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white opacity-90">
                    <SelectItem value="Coworking">Coworking</SelectItem>
                    <SelectItem value="Eventos">Eventos</SelectItem>
                    <SelectItem value="Financeiro">Financeiro</SelectItem>
                    <SelectItem value="RH">RH</SelectItem>
                    <SelectItem value="Comunicação">Comunicação</SelectItem>
                    <SelectItem value="Não designado">Não designado</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription className="opacity-50">
                  Em que área é utilizado?
                </FormDescription>
                <FormMessage />
              </FormItem>
              )}
            />
            <FormField control={form.control} name="situation" render={({ field }) => (
              <FormItem>
                <FormLabel>Situação</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select"/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white opacity-90">
                    <SelectItem value="Estoque">Estoque</SelectItem>
                    <SelectItem value="Manutenção">Manutenção</SelectItem>
                    <SelectItem value="Em uso">Em uso</SelectItem>
                    <SelectItem value="Descarte">Descarte</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription className="opacity-50">
                  Em que área é utilizado?
                </FormDescription>
                <FormMessage />
              </FormItem>
              )}
            />

            <FormField control={form.control} name="user" render={({ field }) => (
                <FormItem>
                  <FormLabel>Usuário</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            /> 
            <FormField control={form.control} name="obs" render={({ field }) => (
                <FormItem>
                  <FormLabel>Observações</FormLabel>
                  <Textarea placeholder="Observações e detalhes"/>
                </FormItem>
              )}
            /> 
            <Button className="px-4 py-1 outline rounded-lg text-red-500 hover:scale-110 transition mr-5" type="button" onClick={close}>Cancelar</Button>
            <Button className="px-4 py-1 outline rounded-lg text-green-600 hover:scale-110 transition" type="submit" >Confirmar</Button>
            <br />
            {data.id ?
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