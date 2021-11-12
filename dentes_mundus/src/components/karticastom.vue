<template>
    <div class="card-body">
            <div class="kutia">
                <p style="text-align:center"> Testing</p>
                </div>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
</template>

<script>

export default{
    name:'karticastom',
    props: {
        msg:String
    }

}
</script>

<style lang="scss" scoped>
    .kutia{
        height: 250px;
        width: 250px;
        border-radius: 25px;
        background-color: grey;
    }
</style>