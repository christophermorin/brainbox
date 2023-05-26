"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Launch() {
  const router = useRouter()
  function openNewWindow() {
    var width = Math.min(375, window.innerWidth);
    var height = window.outerHeight;
    var left = 0
    var top = (screen.height - height) / 2;
    var options = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;

    window.open("http://localhost:3000/main", '_blank', options);
  }

  return (
    <section className="flex justify-center items-center relative flex-1">
      <div className="flex flex-col items-center">
        <span>LAUNCH</span>
        <Image
          onClick={() => openNewWindow()}
          src="/box-open.svg"
          width={204}
          height={204}
          alt="Brain Box"
          className="cursor-pointer"
        />
      </div>
    </section>
  )
}

