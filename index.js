console.log("js file is added");
var count = 1;
function dates(dates) {
  let d = new Date(dates);
  //   d = d.substring(4, 15);
  console.log(d);
  return d;
}

collapse();

var html = ``;

function collapse() {
  $(".expand").on("click", function () {
    let len = $(".expanded").attr("class").length;
    if (len == 13) {
      $(this).addClass("rotate");
      // console.log($(this).parent().parent().next());
      // $(".expanded, .edit, .delete").removeClass("hide");
      $(this).parent().parent().next().removeClass("hide");
    } else {
      $(this).removeClass("rotate");
      console.log("abcd");
      // $(".expanded, .edit, .delete").addClass("hide");
      $(this).parent().parent().next().addClass("hide");
    }
    count++;
  });
}
$(".newSch").on("click", function () {
  $(".leftNavbar, .center").addClass("fade");
  $(".modale").removeClass("hide1");
});

$(".close").on("click", function () {
  $(".leftNavbar, .center").removeClass("fade");
  $(".modale").addClass("hide1");
});

$(".create").on("click", function () {
  var str = $(".form").serialize();

  const values = str.split("&");

  const formData = {};

  values.forEach((value) => {
    const a = value.split("=");
    formData[a[0]] = a[1].replace(/%20/g, " ");
  });
  console.log(formData);

  html += `
  <div class="scheduleContainer">
<div
  class="
    schedule
    d-flex
    justify-content-between
    mt-3
    rounded
    align-items-center
  "
>
  <div class="leftSchedule ms-3 p-3">
    <h4>${formData.name}</h4>

    <div class="d-flex">
      <p class="me-2">4 weeks</p>
      <p class="me-2">12 Sessions</p>
    </div>
  </div>
  <div class="scheduleIcons me-3">
    <img
      src="./images/edit.svg"
      alt="edit"
      class="ms-4 edit hide"
    />
    <img
      src="./images/delete.svg"
      alt="delete"
      class="ms-4 delete hide"
    />
    <img
      src="./images/Polygon.svg"
      alt="polygon"
      class="ms-4 expand"
    />
  </div>
</div>
<div class="expanded hide" id="${count}">
  <div class="d-flex justify-content-between">
    <div class="d-flex ms-4">
      <div class="d-flex flex-column me-4">
        <p>START DATE</p>
        <p class="fw-bold">${dates(formData.start)}</p>
      </div>
      <div class="d-flex flex-column">
        <p>END DATE</p>
        <p class="fw-bold">${dates(formData.end)}</p>
      </div>
    </div>
    <div>
      <button class="btn update btn-secondary p-2 me-4">
        Update
      </button>
    </div>
  </div>
  <div
    class="d-flex w-100 align-items-between justify-content-around"
  >
    <button
      class="
        btn btn-light
        days
        d-flex
        align-items-center
        justify-content-center
      "
    >
      <div class="circle"></div>
      Sunday
    </button>
    <button
      class="
        btn btn-light
        days
        d-flex
        align-items-center
        justify-content-center
      "
    >
      <div class="circle"></div>
      Monday
    </button>
    <button
      class="
        btn btn-light
        days
        d-flex
        align-items-center
        justify-content-center
      "
    >
      <div class="circle"></div>
      Tuesday
    </button>
    <button
      class="
        btn btn-light
        days
        d-flex
        align-items-center
        justify-content-center
      "
    >
      <div class="circle"></div>
      Wednesday
    </button>
    <button
      class="
        btn btn-light
        days
        d-flex
        align-items-center
        justify-content-center
      "
    >
      <div class="circle"></div>
      Thursday
    </button>
    <button
      class="
        btn btn-light
        days
        d-flex
        align-items-center
        justify-content-center
      "
    >
      <div class="circle"></div>
      Friday
    </button>
    <button
      class="
        btn btn-light
        days
        d-flex
        align-items-center
        justify-content-center
      "
    >
      <div class="circle"></div>
      Saturday
    </button>
  </div>
</div>
</div>`;

  $(".scheduleContainer").html(html);
  $(".leftNavbar, .center").removeClass("fade");
  $(".modale").addClass("hide1");
  collapse();
});
