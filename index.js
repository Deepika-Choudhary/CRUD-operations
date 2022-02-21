// function submitForm(){
    document.getElementById('form_submit').addEventListener('submit', (e) => {
        e.preventDefault();

    var degree=document.getElementById('form_submit').degree.value;
    var course=document.getElementById('form_submit').course.value;
    var book=document.getElementById('form_submit').book.value;
    var issue=document.getElementById('form_submit').issued.value;
    var valid=document.getElementById('form_submit').valid.value;
   
    // console.log(degree);
    // console.log(course);

    // document.getElementById('edit_btn').addEventListener('onclick',(e) => {
    //     e.preventDefault();
    //     document.getElementById('data').disabled=true;

    // })

    document.getElementById('data').innerHTML +=`
  
    <tr id='myRow'>
    <td>`+degree+`</td>
    <td>`+course+`</td>
    <td>`+book+`</td>
    <td>`+issue+`</td>
    <td>`+valid+`</td>
    <td><button type="edit" class="edit" id="edit_btn" onclick="edit(this)">Edit</button></td>
    <td><button type="delete" value="Delete" onclick="removeRow(this)">Delete</button></td>
    </tr>
    `;
}
)

function edit(e){
    var i=e.parentNode.parentNode.rowIndex;
    var x=document.getElementById('data').rows[i].cells;
    // console.log(x[0].innerHTML, x[1].innerHTML, x[2].innerHTML, x[3].innerHTML, x[4].innerHTML);
    console.log(document.getElementById('data').rows[i].cells[0].innerText);
    document.getElementById('form_submit').degree.value=x[0].innerHTML;
    document.getElementById('form_submit').course.value=x[1].innerHTML;
    document.getElementById('form_submit').book.value=x[2].innerHTML;
    document.getElementById('form_submit').issued.value=x[3].innerHTML;
    document.getElementById('form_submit').valid.value=x[4].innerHTML;
    
    document.getElementById('form_submit').addEventListener('submit', (e) => {
        e.preventDefault();
        // console.log(document.getElementById('data').rows[i].cells[0].innerText);
        document.getElementById('data').rows[i].cells[0].innerText=document.getElementById('form_submit').degree.value;
        document.getElementById('data').rows[i].cells[1].innerText=document.getElementById('form_submit').course.value;
        document.getElementById('data').rows[i].cells[2].innerText=document.getElementById('form_submit').book.value;
        document.getElementById('data').rows[i].cells[3].innerText=document.getElementById('form_submit').issued.value;
        document.getElementById('data').rows[i].cells[4].innerText=document.getElementById('form_submit').valid.value;     
    })

}

function removeRow(r){
    console.log('action taken')
    var i=r.parentNode.parentNode.rowIndex;
    document.getElementById('data').deleteRow(i);
    }



