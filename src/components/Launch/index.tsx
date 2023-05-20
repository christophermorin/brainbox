"use client"
export default function Launch() {
  function openNewWindow() {
    var width = Math.min(380, window.innerWidth); // Set the maximum width to 380 pixels
    var height = window.outerHeight; // Use the user's maximum viewport height
    var left = 0
    var top = (screen.height - height) / 2;
    var options = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;

    window.open("http://localhost:3000/main", '_blank', options);
  }

  return (
    <div className="grid grid-cols-1 h-full justify-items-center">
      <p className="uppercase">
        Launch Brain Box!
      </p>
      <div onClick={() => openNewWindow()} className="grid grid-cols-1 items-center justify-items-center">
        Launch here
      </div>
      {/* <Waves /> */}
    </div>
  )
}