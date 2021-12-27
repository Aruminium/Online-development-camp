<template>
<div id="page-top">
    <div id="wrapper">
        <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div class="container-fluid d-flex flex-column p-0"><nuxt-link to="/" class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" >
                    <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
                    <div class="sidebar-brand-text mx-3"><span>TodoRanking</span></div>
                </nuxt-link>
                <hr class="sidebar-divider my-0">
                <ul class="navbar-nav text-light" id="accordionSidebar">
                    <li class="nav-item"><nuxt-link to="/Room" class="nav-link" ><i class="fas fa-tachometer-alt"></i><span>Room</span></nuxt-link></li>
                    <li class="nav-item"><nuxt-link to="/profile" class="nav-link" ><i class="fas fa-user"></i><span>Profile</span></nuxt-link></li>
                    <li class="nav-item"><nuxt-link to="/table" class="nav-link active" ><i class="fas fa-table"></i><span>Table</span></nuxt-link></li>
                    <li class="nav-item"><nuxt-link to="/login" class="nav-link" ><i class="far fa-user-circle"></i><span>Login</span></nuxt-link></li>
                    <li class="nav-item"><nuxt-link to="/register" class="nav-link" ><i class="fas fa-user-circle"></i><span>Register</span></nuxt-link></li>
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
                    <div class="card shadow">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 fw-bold">Ranking</p>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6 text-nowrap">
                                    <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable"><label class="form-label">Show&nbsp;<select class="d-inline-block form-select form-select-sm">
                                                <option value="10" selected="">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>&nbsp;</label></div>
                                </div>
                                <div class="col-md-6">
                                    <div class="text-md-end dataTables_filter" id="dataTable_filter"><label class="form-label"><input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"></label></div>
                                </div>
                            </div>
                            <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <table class="table my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>Rank</th>
                                            <th>Name</th>
                                            <th>task</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="~/assets/img/avatars/avatar1.jpeg" />Airi Satou</td>
                                            <td>33</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="~/assets/img/avatars/avatar2.jpeg" />Angelica Ramos</td>
                                            <td>47</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="~/assets/img/avatars/avatar3.jpeg" />Ashton Cox</td>
                                            <td>66</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="~/assets/img/avatars/avatar4.jpeg" />Bradley Greer</td>
                                            <td>41</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="~/assets/img/avatars/avatar5.jpeg" />Brenden Wagner</td>
                                            <td>28</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="~/assets/img/avatars/avatar1.jpeg" />Brielle Williamson</td>
                                            <td>61</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="~/assets/img/avatars/avatar2.jpeg" />Bruno Nash<br></td>
                                            <td>38</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="~/assets/img/avatars/avatar3.jpeg" />Caesar Vance</td>
                                            <td>21</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="~/assets/img/avatars/avatar4.jpeg" />Cara Stevens</td>
                                            <td>46</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="~/assets/img/avatars/avatar5.jpeg" />Cedric Kelly</td>
                                            <td>22</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td>Rank</td>
                                            <td><strong>Name</strong></td>
                                            <td><strong>Task</strong></td>
                                        </tr>
                                    </tfoot>
                                </table>
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