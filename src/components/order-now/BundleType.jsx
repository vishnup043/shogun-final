import React from "react";

const BundleType = ({ bundleDetails, onSelect, selectedBundle }) => {
	const { price, unit, purchaseMode, finalPrice, id } = bundleDetails;
	const isBundleSelected = React.useMemo(() => selectedBundle?.id === id, [selectedBundle, id]);
	return (
		<label className="flex items-start gap-4 border-b py-4 cursor-pointer">
			<div className="relative">
				<input defaultChecked={selectedBundle?.id === id} onClick={() => onSelect(bundleDetails)} type="radio" name="purchaseOption" value="onetime" />
			</div>
			<div className="block rounded">
				<p className="2xl:text-xl text-lg text-black">
					Price ${price} / {unit}
					<span className="block">{purchaseMode === "ONE_TIME" ? "(Onetime Purchase)" : "(Monthly auto ship subscription)"}</span>
					<span className="block">${finalPrice || price}</span>
				</p>
			</div>
		</label>
	);
};

export default BundleType;

{
	/* <label className="flex items-start gap-4 border-b py-4 cursor-pointer">
<div className="relative">
    <input type="radio" name="purchaseOption" value="onetime" />
</div>
<div className="block rounded">
    <p className="2xl:text-xl text-lg text-black">
        Price $150 / Bottle (140 ml)
        <span className="block">(Onetime Purchase)</span>
        <span className="block">$150</span>
    </p>
</div>
</label>


<label className="flex items-start gap-4 cursor-pointer">
<div className="relative">
    <input type="radio" name="purchaseOption" value="subscription" />
</div>
<div className="block rounded">
    <p className="2xl:text-xl text-lg text-black">
        Price $120.00 / Bottle (140 ml) (2 Bottles/Mo)
        <span className="block">Monthly auto ship subscription</span>
        <span className="block">$2,800.00</span>
    </p>
</div>
</label> */
}
