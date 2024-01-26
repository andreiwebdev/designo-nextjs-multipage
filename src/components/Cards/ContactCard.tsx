export const ContactCard = () => {
    return (
        <div className="bg-peach text-center text-white py-[72px] px-[24px] mb-[120px] md:rounded-[15px] md:px-[58px] md:text-left xl:flex xl:items-center xl:mb-[160px] xl:py-[55px] xl:px-[95px] xl:gap-[95px] relative overflow-hidden">
            <div className="z-10 relative">
                <div className="text-[32px] font-medium leading-[36px] mb-[24px] md:text-[48px] md:leading-[48px] md:mb-[32px] xl:mb-[32px]">
                    Contact Us
                </div>
                <p className="text-[15px] leading-[25px] mb-[48px] w-[327px] mx-auto md:mr-0 md:ml-0 md:w-full xl:w-[445px]">
                    Ready to take it to the next level? Let’s talk about your
                    project or idea and find out how we can help your business
                    grow. If you are looking for unique digital experiences
                    that’s relatable to your users, drop us a line.
                </p>
            </div>
            <div>
                <form>
                    <input
                        className="w-full bg-transparent border-b border-b-white mb-[25px] py-[11px] px-[13px] placeholder:text-white placeholder:text-[15px] placeholder:font-medium placeholder:leading-[26px] placeholder:opacity-50 focus:outline-none md:px-[24px] xl:px-[16px] xl:py-[11px]"
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        className="w-full bg-transparent border-b border-b-white mb-[25px] py-[11px] px-[13px] placeholder:text-white placeholder:text-[15px] placeholder:font-medium placeholder:leading-[26px] placeholder:opacity-50 focus:outline-none md:px-[24px] xl:px-[16px] xl:py-[11px]"
                        type="email"
                        placeholder="Email Address"
                    />
                    <input
                        className="w-full bg-transparent border-b border-b-white mb-[25px] py-[11px] px-[13px] placeholder:text-white placeholder:text-[15px] placeholder:font-medium placeholder:leading-[26px] placeholder:opacity-50 focus:outline-none md:px-[24px] xl:px-[16px] xl:py-[11px]"
                        type="text"
                        placeholder="Phone"
                    />
                    <textarea
                        className="w-full bg-transparent border-b border-b-white mb-[25px] py-[11px] px-[13px] placeholder:text-white placeholder:text-[15px] placeholder:font-medium placeholder:leading-[26px] placeholder:opacity-50 focus:outline-none md:px-[24px] xl:px-[16px] xl:py-[11px]"
                        name="message"
                        cols={30}
                        rows={7}
                        placeholder="Your Message"
                    ></textarea>
                    <button
                        type="submit"
                        className="pt-[18px] pb-[16px] px-[48px] text-[15px] font-medium tracking-[1px] uppercase rounded-[8px] w-fit cursor-pointer transition-colors bg-white text-darkGrey hover:bg-lightPeach hover:text-white md:flex md:justify-end md:ml-auto"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
            <div
                className="w-[292px] h-[292px] rounded-full absolute top-0 left-0 opacity-[0.3] z-[1] md:w-[640px] md:h-[640px] md:-left-[30%] md:-top-[10%] xl:left-0 xl:-top-10 rotate-[90deg]"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                }}
            ></div>
            <div
                className="w-[292px] h-[292px] rounded-full absolute top-0 right-0 opacity-[0.3] z-[1] md:hidden"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                }}
            ></div>
        </div>
    );
};
