import { createI18n } from "vue-i18n"

import zh from "./zh"
import en from "./en"

const default_lang = "zh"

const i18n = createI18n({
    locale: default_lang,
    messages: {
        zh,
        en
    }
})

export default i18n