Vue.component("aleph-upgrade", {
    props: ["upgrade"],
    template: `<resource-upgrade :upgrade="upgrade" :resourcename="&aleph;"></resource-upgrade>`
});