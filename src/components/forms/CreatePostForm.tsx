import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { postFormSchema } from "@/lib/validation"

const CreatePostForm = () => {

  const postForm = useForm<z.infer<typeof postFormSchema>>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      caption: "",
      location: "",
      tags: ""
    },
  })

  function onSubmit(values: z.infer<typeof postFormSchema>) {
    console.log(values)
  }

  return (
    <Form {...postForm}>
      <form
        onSubmit={postForm.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full max-w-5xl pt-6"
      >
        <FormField
          control={postForm.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-lg">Caption</FormLabel>
              <FormControl>
                <Textarea
                  className="shad-textarea custom-scrollbar"
                  {...field} />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <FormField
          control={postForm.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-lg">Location</FormLabel>
              <FormControl>
                <Input
                  className="shad-input bg-dark-3"
                  {...field} />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <FormField
          control={postForm.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-lg">Tags</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Art, Fashion, Lifestyle"
                  className="shad-input bg-dark-3 custom-scrollbar"
                  {...field} />
              </FormControl>
              <FormDescription className="text-light-3 ">Add Tags (separated by comma " , ")</FormDescription>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="shad-button_primary rounded-2xl font-semibold"
        >
          Create Post
        </Button>
      </form>
    </Form>
  )
}

export default CreatePostForm