import React from 'react'
import { FormField,FormControl, FormDescription,FormItem,FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const Formfield = () => (
      <FormField
            control={form.control}
            name="username"
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
          />
)

export default Formfield
