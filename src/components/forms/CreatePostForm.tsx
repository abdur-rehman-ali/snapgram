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
import FileUploader from "../shared/FileUploader/FileUploader"
import { useCreatePost, useUpdatePost } from "@/lib/react-query/mutations"
import { useUserContext } from "@/context/AuthProvider"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { Loader } from "lucide-react"
import { Models } from "appwrite"

type CreatePostFormProps = {
  post?: Models.Document,
}

const CreatePostForm = ({ post }: CreatePostFormProps) => {

  const postForm = useForm<z.infer<typeof postFormSchema>>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      caption: post ? post.caption : "",
      image: [],
      location: post ? post.location : "",
      tags: post ? post.tags.join(', ') : ""
    },
  })

  const { mutateAsync: createPost, isPending: isPostLoading } = useCreatePost()
  const { mutateAsync: updatePost, isPending: isPostUpdateLoading } = useUpdatePost()

  const { user } = useUserContext()
  const navigate = useNavigate()

  async function onSubmit(values: z.infer<typeof postFormSchema>) {
    const { caption, image, location, tags } = values

    if (post) {
      await updatePost({
        postId: post.$id,
        caption,
        tags,
        location,
        imageId: post.imageID,
        imageUrl: post.imageURL,
        file: image
      })
      navigate('/')
      toast.success("Post updated successfully")
    } else {
      if (!image || image.length === 0) {
        toast.error("Image is required")
        return
      }

      await createPost({
        caption,
        location,
        tags,
        file: image,
        userID: user.id
      })
      navigate('/')
      toast.success("New post created successfully")
    }
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
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-lg">Image</FormLabel>
              <FormControl>
                <FileUploader fieldChange={field.onChange} imageURL={post?.imageURL} />
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
          disabled={isPostLoading}
        >
          {
            isPostLoading || isPostUpdateLoading ? <Loader /> : (post ? "Update Post" : "Create Post")
          }
        </Button>
      </form>
    </Form>
  )
}

export default CreatePostForm
