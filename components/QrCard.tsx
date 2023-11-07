import Image from "next/image";

export default function QrCard() {
	return (
		<div className="w-80 bg-white rounded-xl p-4 flex flex-col justify-center items-center shadow-xl">
			<div className="flex flex-col justify-center items-center text-center space-y-4">
				<Image
					className="rounded-xl"
					src={"/image-qr-code.png"}
					alt="QR Code"
					width={300}
					height={300}
				/>
				<h2 className="font-bold text-2xl">
					Improve your front-end skills by building projects
				</h2>
				<p className="text-grayishBlue pb-4">
					Scan the QR code to visit Frontend Mentor and take your
					coding skills to the next level
				</p>
			</div>
		</div>
	);
}
