import Image from "next/image";

export default function QrCard() {
	return (
		<div className="w-[22rem] bg-white rounded-2xl p-4 flex flex-col justify-center items-center shadow-2xl shadow-darkBlue/20">
			<div className="flex flex-col justify-center items-center text-center space-y-4">
				<Image
					className="rounded-xl"
					src="/image-qr-code.png"
					alt="QR Code"
					width={400}
					height={400}
				/>
				<div className="px-6 space-y-4">
					<h2 className="font-semibold text-2xl">
						Improve your front-end skills by building projects
					</h2>
					<p className="text-grayishBlue pb-6">
						Scan the QR code to visit Frontend Mentor and take your
						coding skills to the next level
					</p>
				</div>
			</div>
		</div>
	);
}
