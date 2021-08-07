const doneActivity = 'DONE_ACTIVITY_DATA',
planActivity = 'PLAN_ACTIVITY_DATA'
window.addEventListener('load',() => {
  if(typeof(Storage) != undefined){
    if(localStorage.getItem(doneActivity) === null){
      localStorage.setItem(doneActivity,'[]')
      doneData = []
    }else{
      doneData = JSON.parse(localStorage.getItem(doneActivity))
      doneData.forEach(done => {
        showDoneData(done)
      })
    }if(localStorage.getItem(planActivity) === null){
      localStorage.setItem(planActivity,'[]')
      planData = []
    }else{
        planData = JSON.parse(localStorage.getItem(planActivity))
        planData.forEach(plan => {
        showPlanData(plan)
      })
    }
  }
})
let doneData,
    planData,
    i = 0,
    destination = document.querySelector('#inputDestination'),
    date = document.querySelector('#inputDate'),
    person = document.querySelector('#inputPerson'),
    activity = document.querySelector('#inputActivity'),
    validation = document.querySelector('#validation'),
    submitButton = document.querySelector('#addPlan'),
    impressionArea = document.querySelector('#impressionArea'),
    saveImpression = document.querySelector('#saveImpression'),
    activityPlan = document.querySelector('#activityPlan'),
    activityDone = document.querySelector('#activityDone');

submitButton.addEventListener('click',e => {
    e.preventDefault();
    if(destination.value == "" && date.value == "" && person.value == "" && activity.value == ""){
        console.log('There are not data')
        validation.innerHTML = `
        <!-- Modal -->
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Rencana kegiatan kosong</h5>
              </div>
              <div class="modal-body">
                <p>Kamu belum mengisi apapun. Isi dulu rencana kegiatannya yaa....</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
              </div>
            </div>
          </div>`
        submitButton.setAttribute('data-toggle','modal')
        submitButton.setAttribute('data-target','#validation')
    }else{
        submitButton.setAttribute('data-toggle','modal')
        submitButton.setAttribute('data-target','')
        let plan = {
            id: +new Date(),
            dest: destination.value,
            dat: date.value,
            per: person.value,
            imp: null,
            act: activity.value
        }
        planData.push(plan)
        localStorage.setItem(planActivity,JSON.stringify(planData))
        i++
        showPlanData(plan)
        destination.value = ""
        date.value = ""
        person.value = ""
        activity.value = ""
    }
})


activityDesc = (plan) => {
    let activityDesc = document.querySelector('#activityDesc')
    activityDesc.innerHTML = `<p>${plan}</p>`
}
impressionDesc = (plan) => {
    let impressionDesc = document.querySelector('#impressionDesc')
    impressionDesc.innerHTML = `<p>${plan}</p>`
}
showPlanData = (e) => {
    activityPlan.innerHTML += `<tr id="${e.id}">  
        <td><p>${planData.indexOf(e)+1}</p></td>
        <td><p>${e.dest}</p></td>
        <td><p>${e.dat}</p></td>
        <td><p>${e.per}</p></td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#activity" onClick="activityDesc('${e.act}')" id="activityButton">
            Lihat
          </button></td>
          <td><button type="button" class="btn btn-success" data-toggle="modal" data-target="#Activitydone" onClick="impression('${e.id}')">
            Selesai
          </button></td>
    </tr>`
}
showDoneData = (e) => {
  activityDone.innerHTML += `<tr id="${e.id}">  
          <td><p>${doneData.indexOf(e)+1}</p></td>
          <td><p>${e.dest}</p></td>
          <td><p>${e.dat}</p></td>
          <td><p>${e.per}</p></td>
          <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#activity" onClick="activityDesc('${e.act}')" id="activityButton">
          Lihat
          </button></td>
          <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#impression" onClick="impressionDesc('${e.imp}')">Lihat</button></td>
          </tr>`
}
impression = (id) => {
    saveImpression.addEventListener('click',() => {
        let plan = planData.filter(e => {
          return e.id === parseInt(id)
        })
        console.log(plan)
          plan[0].imp = impressionArea.value
          let actPlan = document.getElementById(id)
          planData.splice(planData.indexOf(plan[0]),1)
          doneData.push(plan[0])
          localStorage.setItem(planActivity,JSON.stringify(planData))
          localStorage.setItem(doneActivity,JSON.stringify(doneData))
          showDoneData(plan[0])
          location.reload()
    })
    impressionArea.value = ""
}