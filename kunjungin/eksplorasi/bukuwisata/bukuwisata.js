let plans = [],
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
        plans.push(plan)
        i++
        showData(plan,i)
        destination.value = ""
        date.value = ""
        person.value = ""
        activity.value = ""
    }
})


activityDesc = (plan) => {
    let activityDesc = document.querySelector('#activityDesc')
    activityDesc.innerHTML = `<p>${plan}</p>`
    console.log('tes')
}
impressionDesc = (plan) => {
    let impressionDesc = document.querySelector('#impressionDesc')
    impressionDesc.innerHTML = `<p>${plan}</p>`
    console.log('tes')
}
showData = (e,i) => {
    activityPlan.innerHTML += `<tr id="${e.id}">  
        <td><p>${i}</p></td>
        <td><p>${e.dest}</p></td>
        <td><p>${e.dat}</p></td>
        <td><p>${e.per}</p></td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#activity" onClick="activityDesc('${e.act}')" id="activityButton">
            Lihat
          </button></td>
          <td><button type="button" class="btn btn-success" data-toggle="modal" data-target="#Activitydone" onClick="impression('${e.id}')">
            Simpan
          </button></td>
    </tr>`
}
impression = (id) => {
    let i = 0,
        done = document.querySelector('#Activitydone')
    saveImpression.addEventListener('click',() => {
        let plan = plans.find(e => {
            return e.id === parseInt(id)
        })
        plan.imp = impressionArea.value
        console.log(plan)
        let actPlan = document.getElementById(id)
        actPlan.remove()
        activityDone.innerHTML += `<tr>  
        <td><p>${i}</p></td>
        <td><p>${plan.dest}</p></td>
        <td><p>${plan.dat}</p></td>
        <td><p>${plan.per}</p></td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#activity" onClick="activityDesc('${plan.act}')" id="activityButton">
        Lihat
        </button></td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#impression" onClick="impressionDesc('${plan.imp}')">Lihat</button></td>
        </tr>`
    })
    impressionArea.value = ""
}