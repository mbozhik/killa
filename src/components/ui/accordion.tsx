'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import {ChevronDown} from 'lucide-react'

import {cn} from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(({className, ...props}, ref) => <AccordionPrimitive.Item ref={ref} className={cn('', className)} {...props} />)
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(({className, children, ...props}, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger ref={ref} className={cn('flex flex-1 items-center justify-between bg-custom-f3/90 ring-2 ring-custom-primary text-2xl xl:text-xl text-custom-primary rounded-md p-4 font-medium transition-all hover:text-opacity-80 [&[data-state=open]>svg]:rotate-180', className)} {...props}>
      {children}
      <ChevronDown className="transition-transform duration-300 s-7 shrink-0" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(({className, children, ...props}, ref) => (
  <AccordionPrimitive.Content ref={ref} className="overflow-hidden mt-3.5 text-xl tracking-tight xl:tracking-normal transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...props}>
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export {Accordion, AccordionItem, AccordionTrigger, AccordionContent}
