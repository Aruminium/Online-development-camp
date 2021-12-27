<template>
<div id="page-top">
    <div id="wrapper">
        <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div class="container-fluid d-flex flex-column p-0"><nuxt-link to="/" class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0">
                    <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
                    <div class="sidebar-brand-text mx-3"><span>TodoRanking</span></div>
                </nuxt-link>
                <hr class="sidebar-divider my-0">
                <ul class="navbar-nav text-light" id="accordionSidebar">
                    <li class="nav-item"><nuxt-link to="/Room" class="nav-link active"><i class="fas fa-tachometer-alt"></i><span>Room</span></nuxt-link></li>
                    <li class="nav-item"><nuxt-link to="/profile" class="nav-link" ><i class="fas fa-user"></i><span>Profile</span></nuxt-link></li>
                    <li class="nav-item"><nuxt-link to="/table" class="nav-link" ><i class="fas fa-table"></i><span>Table</span></nuxt-link></li>
                    <li class="nav-item"><nuxt-link to="/login" class="nav-link" ><i class="far fa-user-circle"></i><span>Login</span></nuxt-link></li>
                    <li class="nav-item"><nuxt-link to="/register" class="nav-link" ><i class="fas fa-user-circle"></i><span>Register</span></nuxt-link></li>
                    <li class="nav-item"><nuxt-link to="/TodoList" class="nav-link" ><i class="fas fa-user-circle"></i><span>todoList</span></nuxt-link></li>
                </ul>
                <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
            </div>
        </nav>
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                    <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
                        <form class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ..."><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
                        </form>
                        <ul class="navbar-nav flex-nowrap ms-auto">
                            <li class="nav-item dropdown d-sm-none no-arrow"><nuxt-link to="/" class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" ><i class="fas fa-search"></i></nuxt-link>
                                <div class="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                    <form class="me-auto navbar-search w-100">
                                        <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ...">
                                            <div class="input-group-append"><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li class="nav-item dropdown no-arrow mx-1">
                                <div class="nav-item dropdown no-arrow"><nuxt-link to="/" class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" ><span class="badge bg-danger badge-counter">3+</span><i class="fas fa-bell fa-fw"></i></nuxt-link>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                        <h6 class="dropdown-header">alerts center</h6><nuxt-link to="/" class="dropdown-item d-flex align-items-center" >
                                            <div class="me-3">
                                                <div class="bg-primary icon-circle"><i class="fas fa-file-alt text-white"></i></div>
                                            </div>
                                            <div><span class="small text-gray-500">December 12, 2019</span>
                                                <p>A new monthly report is ready to download!</p>
                                            </div>
                                        </nuxt-link><nuxt-link to="/" class="dropdown-item d-flex align-items-center" >
                                            <div class="me-3">
                                                <div class="bg-success icon-circle"><i class="fas fa-donate text-white"></i></div>
                                            </div>
                                            <div><span class="small text-gray-500">December 7, 2019</span>
                                                <p>$290.29 has been deposited into your account!</p>
                                            </div>
                                        </nuxt-link><nuxt-link to="/" class="dropdown-item d-flex align-items-center" >
                                            <div class="me-3">
                                                <div class="bg-warning icon-circle"><i class="fas fa-exclamation-triangle text-white"></i></div>
                                            </div>
                                            <div><span class="small text-gray-500">December 2, 2019</span>
                                                <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                            </div>
                                        </nuxt-link><nuxt-link to="/" class="dropdown-item text-center small text-gray-500" >Show All Alerts</nuxt-link>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown no-arrow mx-1">
                                <div class="nav-item dropdown no-arrow"><nuxt-link to="/" class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" ><span class="badge bg-danger badge-counter">7</span><i class="fas fa-envelope fa-fw"></i></nuxt-link>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                        <h6 class="dropdown-header">alerts center</h6><nuxt-link to="/" class="dropdown-item d-flex align-items-center" >
                                            <div class="dropdown-list-image me-3"><img class="rounded-circle" src="~/assets/img/avatars/avatar4.jpeg" />
                                                <div class="bg-success status-indicator"></div>
                                            </div>
                                            <div class="fw-bold">
                                                <div class="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                                                <p class="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                            </div>
                                        </nuxt-link><nuxt-link to="/" class="dropdown-item d-flex align-items-center" >
                                            <div class="dropdown-list-image me-3"><img class="rounded-circle" src="~/assets/img/avatars/avatar2.jpeg" />
                                                <div class="status-indicator"></div>
                                            </div>
                                            <div class="fw-bold">
                                                <div class="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                                <p class="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                            </div>
                                        </nuxt-link><nuxt-link to="/" class="dropdown-item d-flex align-items-center" >
                                            <div class="dropdown-list-image me-3"><img class="rounded-circle" src="~/assets/img/avatars/avatar3.jpeg" />
                                                <div class="bg-warning status-indicator"></div>
                                            </div>
                                            <div class="fw-bold">
                                                <div class="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                                <p class="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                            </div>
                                        </nuxt-link><nuxt-link to="/" class="dropdown-item d-flex align-items-center" >
                                            <div class="dropdown-list-image me-3"><img class="rounded-circle" src="~/assets/img/avatars/avatar5.jpeg" />
                                                <div class="bg-success status-indicator"></div>
                                            </div>
                                            <div class="fw-bold">
                                                <div class="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                                                <p class="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                            </div>
                                        </nuxt-link><nuxt-link to="/" class="dropdown-item text-center small text-gray-500" >Show All Alerts</nuxt-link>
                                    </div>
                                </div>
                                <div class="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown"></div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="container-fluid">
                    <div class="d-sm-flex justify-content-between align-items-center mb-4">
                        <h3 class="text-dark mb-0">Room</h3>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-xl-3 mb-4">
                            <div class="card shadow border-start-info py-2">
                                <div class="card-body">
                                    <div class="row align-items-center no-gutters">
                                        <div class="col me-2">
                                            <div class="text-uppercase text-info fw-bold text-xs mb-1"><span>Tasks</span></div>
                                            <div class="row g-0 align-items-center">
                                                <div class="col-auto">
                                                    <div class="text-dark fw-bold h5 mb-0 me-3"><span>50%</span></div>
                                                </div>
                                                <div class="col">
                                                    <div class="progress progress-sm">
                                                        <div class="progress-bar bg-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"><span class="visually-hidden">50%</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto"><i class="fas fa-clipboard-list fa-2x text-gray-300"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 mb-4">
                            <div class="card shadow mb-4" >
                                <div class="card-header py-3">
                                    <h6 class="text-primary fw-bold m-0">Ranking</h6>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <div class="row text-center align-items-center no-gutters">
                                            <div class="col me-2">
                                                <h6 class="mb-0"><strong>1位</strong></h6>
                                            </div>
                                            <div class="col me-2">
                                                <h6 class="mb-0"><strong>hoge</strong></h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="row align-items-center no-gutters">
                                            <div class="col text-center me-2">
                                                <h6 class="mb-0"><strong>2位</strong></h6>
                                            </div>
                                            <div class="col text-center me-2">
                                                <h6 class="mb-0"><strong>piyo</strong></h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="row align-items-center no-gutters">
                                            <div class="col text-center me-2">
                                                <h6 class="mb-0">3位</h6>
                                            </div>
                                            <div class="col text-center me-2">
                                                <h6 class="mb-0"><strong>mh</strong></h6>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 mb-4">
                            <div class="card shadow mb-4">
                                <form @submit.prevent="addTodoFromPage">
                                    <div class="card-header py-3">
                                        <h6 for="inputTodo" class="text-primary fw-bold m-0">Todo List</h6>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li v-for="(todo,todoList) in getTodos" :key="todoList" class="list-group-item">
                                            <div class="row align-items-center no-gutters">
                                                <div class="col me-2">
                                                    <h6 class="mb-0"><strong>{{todo}}</strong></h6><span class="text-xs">10:30 AM</span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-1"><label class="form-check-label" for="formCheck-1"></label></div>
                                                    <button @click="deleteTodo(todoList)">
                                                        削除する
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <input v-model="todoInput" type="text" class="form-control" id="inputTodo" placeholder="TODOを入力..." />
                                    <button type="submit" class=" col-6 offset-3 btn btn-primary btn-block">TODOを追加する</button>
                                </form>
                            </div>
                            <div class="card shadow mb-4" >
                                <div class="card-header py-3">
                                    <h6 class="text-primary fw-bold m-0">Member</h6>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <div class="row text-center align-items-center no-gutters">
                                            <div class="col me-2">
                                                <h6 class="mb-0"><strong>userId:123</strong></h6>
                                            </div>
                                            <div class="col me-2">
                                                <h6 class="mb-0"><strong>hoge</strong></h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="row align-items-center no-gutters">
                                            <div class="col text-center me-2">
                                                <h6 class="mb-0"><strong>userId:456</strong></h6>
                                            </div>
                                            <div class="col text-center me-2">
                                                <h6 class="mb-0"><strong>piyo</strong></h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="row align-items-center no-gutters">
                                            <div class="col text-center me-2">
                                                <h6 class="mb-0"><strong>userId:789</strong></h6>
                                            </div>
                                            <div class="col text-center me-2">
                                                <h6 class="mb-0"><strong>mh</strong></h6>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="bg-white sticky-footer"></footer>
        </div><nuxt-link to="/" class="border rounded d-inline scroll-to-top" ><i class="fas fa-angle-up"></i></nuxt-link>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      todoInput: ""
    };
  },

  methods: {
    addTodoFromPage() {
      this.$store.dispatch("addTodoFromActions", this.todoInput);
      this.todoInput ="";
    },
    deleteTodo(todoList) {
      this.$store.dispatch("deleteTodo", todoList);
    }
  },

  computed: {
    getTodos() {
    return this.$store.getters.getTodos;
    }
  }
}
</script>
