"use client";

import { useState } from "react";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "", message: "" });

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value);
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value);
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setMessage(e.target.value);

    const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let formErrors = { name: "", email: "", message: "" };

        if (!name) formErrors.name = "Can't be empty";
        if (!email) {
            formErrors.email = "Can't be empty";
        } else if (!isValidEmail(email)) {
            formErrors.email = "Please use a valid email address";
        }
        if (!message) formErrors.message = "Can't be empty";

        setErrors(formErrors);

        // If no errors, you can proceed to send the data
        if (!formErrors.name && !formErrors.email && !formErrors.message) {
            // Send data to server or handle it as required
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="w-full bg-transparent border-b border-b-white mb-[12.5px] py-[11px] px-[13px] placeholder:text-white placeholder:text-[15px] placeholder:font-medium placeholder:leading-[26px] placeholder:opacity-50 focus:outline-none md:px-[24px] xl:px-[16px] xl:py-[11px]"
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
            />
            {errors.name && <div>{errors.name}</div>}
            <input
                className="w-full bg-transparent border-b border-b-white mb-[12.5px] mt-[12.5px] py-[11px] px-[13px] placeholder:text-white placeholder:text-[15px] placeholder:font-medium placeholder:leading-[26px] placeholder:opacity-50 focus:outline-none md:px-[24px] xl:px-[16px] xl:py-[11px]"
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={handleEmailChange}
            />
            {errors.email && <div>{errors.email}</div>}
            <input
                className="w-full bg-transparent border-b border-b-white mb-[12.5px] mt-[12.5px] py-[11px] px-[13px] placeholder:text-white placeholder:text-[15px] placeholder:font-medium placeholder:leading-[26px] placeholder:opacity-50 focus:outline-none md:px-[24px] xl:px-[16px] xl:py-[11px]"
                type="text"
                placeholder="Phone"
            />
            <textarea
                className="w-full bg-transparent border-b border-b-white mb-[12.5px] mt-[12.5px] py-[11px] px-[13px] placeholder:text-white placeholder:text-[15px] placeholder:font-medium placeholder:leading-[26px] placeholder:opacity-50 focus:outline-none md:px-[24px] xl:px-[16px] xl:py-[11px]"
                name="message"
                cols={30}
                rows={7}
                placeholder="Your Message"
                value={message}
                onChange={handleMessageChange}
            ></textarea>
            {errors.message && <div>{errors.message}</div>}
            <button
                type="submit"
                className="pt-[18px] pb-[16px] px-[48px] text-[15px] font-medium tracking-[1px] uppercase rounded-[8px] w-fit cursor-pointer transition-colors bg-white text-darkGrey hover:bg-lightPeach hover:text-white md:flex md:justify-end md:ml-auto"
            >
                SUBMIT
            </button>
        </form>
    );
};
