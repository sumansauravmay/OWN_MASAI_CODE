import postTodo from "../fixtures/postTodos.json";


describe("Test our todo app",()=>{

 // it("visit home page",()=>{
    //     cy.visit("http://localhost:3000")
    // })

    beforeEach("visit home page",()=>{
        cy.visit("http://localhost:3000")

        cy.intercept("GET","http://localhost:4004/todos",{
            fixture:"getTodos.json"
        }).as("getTodos")
    })

    it("should focus on element is with id=`todo-input` as soon as page is visitor",()=>{
        // cy.visit("http://localhost:3000")
        cy.focused().should("have.id","todo-input")
    })

it("should fetch todos correctly on page load",()=>{
    // cy.visit("http://localhost:3000")

     // cy.intercept("GET","http://localhost:4004/todos",{
    //     fixture:"getTodos.json"
    // }).as("getTodos")

cy.wait("@getTodos").then((interception)=>{

    let data=interception.response.body;
data.map((todo,index)=>{
    cy.get("[data-testid=todo-item-value]")
    .eq(index)//eq for indexing
    .should("have.text",todo.value)
    cy.get("[data-testid=todo-item-checkbox]")
    .eq(index)
    .should(todo.isCompleted?"be.checked":"not.be.checked")
 })

//     cy.get("[data-testid=todo-item-value]").each(($el,index)=>{
//     cy.wrap($el).should("have.text",data[index].value)
//    cy.get("[data-testid=todo-item-checkbox]")
//    .eq(index)
//    .should(data[index].isCompleted?"be.checked":"not.be.checked");
//     })

 })

cy.get("[data-testid=todo-item-value]").should("exist")
})

it("should add to todo to list ater typing todo in input and clicking on add button",()=>{
    // cy.visit("http://localhost:3000")
    cy.intercept("POST","http://localhost:4004/todos",{
        fixture:"postTodos.json"
    }).as("postTodo")
    //go to input element
    // type

//    let message="abcde"
    cy.focused().type(postTodo.value);
    // click on add button;
    cy.get("[data-testid=todo-button]").click();
    // wait for api to add data
   
    // check if data axist added correctly.
    cy.wait("@postTodo").then((interception)=>{
        let data=interception.response.body;
        cy.get("[data-testid=todo-item-value]")
  .last()
  .should("have.text",data.value);
    })
   
})

it("shuld ckecked if fetched datqa matches with the todo-list",()=>{

})


})



