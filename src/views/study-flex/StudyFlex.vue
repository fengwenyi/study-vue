<template>
    <div class="container">
        <div class="box box-1">
            <div class="item item-1"></div>
        </div>

        <div class="box box-2">
            <div class="item item-2"></div>
        </div>

        <div class="box box-3">
            <div class="item item-3"></div>
        </div>

        <div class="box box-4">
            <div class="item item-4"></div>
        </div>

        <div class="box box-5">
            <div class="item item-5"></div>
        </div>

        <div class="box box-6">
            <div class="item item-6"></div>
        </div>

        <div class="box box-111">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StudyFlex"
    }
</script>

<style lang="less" scoped>
@import "StudyFlex";

.box-1 {
    display: flex;
}
.box-2 {
    display: flex;
    justify-content: center;
}
.box-3 {
    display: flex;
    justify-content: flex-end;
}
.box-4 {
    display: flex;
    align-items: center;
}
.box-5 {
    display: flex;
    justify-content: center;
    align-items: center;
}
.box-6 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.box-111 {
    display: flex;

    .item:nth-child(2) {
        align-self: center;
    }

    .item:nth-child(3) {
        align-self: flex-end;
    }
}


</style>
