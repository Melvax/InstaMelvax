<template>
  <div class="editor">
    <div class="level">
      <div class="level-item">
        <editor-menu-bar :editor="editor">
          <div class="menubar" slot-scope="{ commands, isActive }">
            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.heading({ level: 1 }) }"
              @click="commands.heading({ level: 1 });"
            >
              Title
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.heading({ level: 2 }) }"
              @click="commands.heading({ level: 2 });"
            >
              Sub
            </button>
            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.paragraph() }"
              @click="commands.paragraph"
            >
              Normal
            </button>

            <button class="menubar__button" @click="commands.undo">
              <img src="https://img.icons8.com/windows/15/000000/undo.png" />
            </button>

            <button class="menubar__button" @click="commands.redo">
              <img src="https://img.icons8.com/windows/15/000000/redo.png" />
            </button>
          </div>
        </editor-menu-bar>
      </div>
    </div>

    <editor-floating-menu :editor="editor">
      <div
        slot-scope="{
          commands,
          isActive,
          menu
        }"
        class="editor__floating-menu"
        :class="{ 'is-active': menu.isActive }"
        :style="`top: ${menu.top}px`"
      >
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 });"
        >
          Title
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 });"
        >
          Sub
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          Normal
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/20/000000/overview-pages-3.png"
          />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/20/000000/quote-right.png"
          />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <img src="https://img.icons8.com/metro/20/000000/js.png" />
        </button>

        <button class="menubar__button" @click="commands.horizontal_rule">
          <img src="https://img.icons8.com/ios-glyphs/20/000000/divide.png" />
        </button>
      </div>
    </editor-floating-menu>

    <editor-menu-bubble :editor="editor">
      <div
        slot-scope="{
          commands,
          isActive,
          menu
        }"
        class="menububble"
        :class="{ 'is-active': menu.isActive }"
        :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
      >
        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <img src="https://img.icons8.com/android/20/ffffff/bold.png" />
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <img src="https://img.icons8.com/metro/20/ffffff/italic.png" />
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <img src="https://img.icons8.com/metro/20/ffffff/code.png" />
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <img
            src="https://img.icons8.com/android/20/ffffff/strikethrough.png"
          />
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <img src="https://img.icons8.com/android/20/ffffff/underline.png" />
        </button>
      </div>
    </editor-menu-bubble>
    <div class="content-container">
      <editor-content class="editor__content" :editor="editor" />
    </div>
  </div>
</template>

<script>
import Icon from "./Icon/index.vue";
import {
  Editor,
  EditorContent,
  EditorMenuBar,
  EditorFloatingMenu,
  EditorMenuBubble
} from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from "tiptap-extensions";
export default {
  components: {
    EditorContent,
    EditorMenuBar,
    EditorFloatingMenu,
    EditorMenuBubble,
    Icon
  },
  data() {
    return {
      editor: new Editor({
        //editable: false,
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: `
          <h1>
            Tell us,
          </h1>
          <h2>
            Start writing your own story 
          </h2>          

          <blockquote>
            You must aim the ⭐️ to lan on the ☀️
            <br />
            – mom
          </blockquote>
        `,
        onUpdate: ({ getJSON, getHTML }) => {
          this.html = getHTML();
          //console.log(this.html);
        }
      }),
      title: "Gang Title",
      subtitle: "This is a gang subtitle"
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>
<style lang="stylus" src="../assets/styles/editor.stylus"></style> @import
"./Helpers/Editor/assets/sass/main.scss"; @import
"./Helpers/Editor/assets/sass/editor.scss"; @import
"./Helpers/Editor/assets/sass/menubar.scss";
