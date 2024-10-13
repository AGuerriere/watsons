import Image from "next/image";

type propsType = {
  text: string;
  textColor?: string; // Optional prop to control text color
};

export default function Checkmark({ text, textColor = "text-neutral-500" }: propsType) {
  return (
    <div className="flex w-full mb-4 items-start">
      <Image 
        src="/images/tick.svg"
        width={20}
        height={20}
        alt="Checkmark image"
        className="mr-3 mt-1"
      />
      <p className={`${textColor} text-base sm:text-2xl font-light`}>{text}</p>
    </div>
  );
}