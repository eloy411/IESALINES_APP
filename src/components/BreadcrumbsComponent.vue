<template>
    <q-breadcrumbs  v-if="crumbs.length > 1">
      <q-breadcrumbs-el
        v-for="(crumb, index) in crumbs"
        :key="index"
        :label="crumb.label"
        :to="crumb.to"
        separator="/"
      />
    </q-breadcrumbs>
</template>
  
  <script>
    export default {
        name: 'BreadcrumbsComponent',
        computed: {
        crumbs() {
            const matchedRoutes = this.$route.matched;
            let myRoutesPath = this.$route.matched[1].path
            let myRoutes = myRoutesPath.split('/');
            console.log(myRoutes)
            console.log(this.$route);
    
    
            let myCompletedRoutes = []
            let routes = ''
            let cont = 0;
    
    
            for (let i = 0; i < myRoutes.length; i++) {
            let myCompletedRoute = {};
            if ( i == 0) {
                myRoutes[i] = 'home';
                routes = '/';
            }else {
                if (i == myRoutes.length || i == 1 ) {
                routes +=  myRoutes[i];
                } else {
                routes +=  '/' + myRoutes[i] ;
                }
            }
            myCompletedRoute['label'] = myRoutes[i],
            myCompletedRoute['to'] = routes;
            myCompletedRoutes.push(myCompletedRoute);
            }
    
            console.log("dsadsa",myCompletedRoutes);
    
    
            const crumbs = myCompletedRoutes.map(route => ({
            label: route.label, //label
            to: route.to //to
            }));
            
            return crumbs;
        }
        }
    };
  </script>
