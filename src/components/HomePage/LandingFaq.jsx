'use client'
import React from 'react'
import {Accordion} from "flowbite-react";


const LandingFaq = () => {
  return (
    <div className="bg-[#D9D9D9] mt-10 mx-5 rounded-2xl p-5">

      <div className="flex justify-center text-black text-2xl font-semibold">
        Frequently Asked Questions
      </div>
      <Accordion collapseAll={true}>
        <Accordion.Panel className="rounded-b-2xl">
          <Accordion.Title>
            What is MinglePay?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium posuere fermentum. Cras viverra
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel className="rounded-b-2xl">
          <Accordion.Title>
            What is MinglePay?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium posuere fermentum. Cras viverra
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel className="rounded-b-2xl">
          <Accordion.Title>
            What is MinglePay?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium posuere fermentum. Cras viverra
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel className="rounded-b-2xl">
          <Accordion.Title>
            What is MinglePay?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium posuere fermentum. Cras viverra
            </p>
          </Accordion.Content>
        </Accordion.Panel>

      </Accordion>
    </div>
  )
}

export default LandingFaq