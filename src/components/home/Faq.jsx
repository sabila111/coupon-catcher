
const Faq = () => {
    return (
       <div className="my-16 max-w-6xl mx-auto">
 <h2 className="text-center text-2xl md:text-4xl lg:text-4xl font-bold mb-10">Frequently Asked Questions</h2>
<div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-xl lg:text-xl font-medium"> How do I know if a coupon is valid?</div>
            <div className="collapse-content">
                <p>Each coupon shows its expiry date. Make sure to use it before the listed date.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg md:text-xl lg:text-xl font-medium"> What types of coupons are available?</div>
            <div className="collapse-content">
                <p>Our coupons include percentage discounts, free shipping, gift offers, and cashback opportunities.

</p>
            </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg md:text-xl lg:text-xl font-medium"> How can I use a discount coupon?</div>
            <div className="collapse-content">
                <p> Click the "Copy Code" button to copy the coupon code. Then, paste it during checkout on the brand's website to redeem your discount.

                </p>
            </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg md:text-xl lg:text-xl font-medium"> Why can’t I access the coupon page?</div>
            <div className="collapse-content">
                <p>The coupon page is a private route and is only accessible to logged-in users. Please log in to view your coupons..
                </p>
            </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg md:text-xl lg:text-xl font-medium"> Are there any conditions for using coupons?</div>
            <div className="collapse-content">
                <p>Yes, some coupons may have specific conditions, such as minimum purchase requirements or being valid only for new users. Please read the details on each coupon card.

                </p>
            </div>
        </div>

    </div>

       </div>
    );
};

export default Faq;