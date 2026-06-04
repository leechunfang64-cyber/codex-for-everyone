import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Codex for Everyone',
  description:
    'A practical handbook for OpenAI Codex workflows, prompts, troubleshooting, and real-world AI coding cases.',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#111827' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Codex for Everyone' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          '一本面向真实开发场景的 OpenAI Codex 开源实战手册。'
      }
    ],
    ['meta', { property: 'og:image', content: '/logo.svg' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }]
  ],
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Codex for Everyone',
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    nav: [
      { text: 'Start', link: '/start/what-is-codex' },
      { text: 'Workflows', link: '/workflows/md-to-word' },
      { text: 'Troubleshooting', link: '/troubleshooting/reconnecting' },
      { text: 'Productization', link: '/productization/from-tool-to-product' },
      { text: 'Principles', link: '/principles/demand-judgment' },
      { text: 'License', link: '/license' },
      {
        text: 'GitHub',
        link: 'https://github.com/leechunfang64-cyber/codex-for-everyone'
      }
    ],
    sidebar: [
      {
        text: 'Start',
        collapsed: false,
        items: [
          { text: 'Codex 是什么', link: '/start/what-is-codex' },
          { text: '普通人也能 AI 编程', link: '/start/ordinary-people-ai-coding' },
          { text: '需求拆解 + 反馈迭代', link: '/start/requirement-feedback-loop' },
          { text: '我的工具链', link: '/start/toolchain' },
          { text: '第一个项目怎么开始', link: '/start/first-project' }
        ]
      },
      {
        text: 'Workflows',
        collapsed: false,
        items: [
          { text: 'md 转 Word 工具', link: '/workflows/md-to-word' },
          { text: '图片处理工具', link: '/workflows/image-processing' },
          { text: '浏览器扩展', link: '/workflows/browser-extension' },
          { text: '邮箱提取工具', link: '/workflows/email-extractor' },
          { text: '虚拟产品发卡页', link: '/workflows/digital-product-checkout' },
          { text: 'PPT 生成工具', link: '/workflows/ppt-generator' },
          { text: '小红书产品素材库', link: '/workflows/xiaohongshu-asset-library' }
        ]
      },
      {
        text: 'Troubleshooting',
        collapsed: false,
        items: [
          { text: 'Codex reconnecting', link: '/troubleshooting/reconnecting' },
          { text: 'token exchange failed', link: '/troubleshooting/token-exchange-failed' },
          { text: 'stream disconnected', link: '/troubleshooting/stream-disconnected' },
          { text: 'GitHub 推送失败', link: '/troubleshooting/github-push-failed' },
          { text: 'Vercel 部署失败', link: '/troubleshooting/vercel-deploy-failed' },
          { text: '环境变量配置', link: '/troubleshooting/env-vars' },
          { text: 'API Key 泄露补救', link: '/troubleshooting/api-key-leak' }
        ]
      },
      {
        text: 'Productization',
        collapsed: false,
        items: [
          { text: '从工具到产品', link: '/productization/from-tool-to-product' },
          { text: '从一次开发到长期资产', link: '/productization/from-one-off-to-asset' },
          { text: '从自用脚本到虚拟产品', link: '/productization/from-script-to-digital-product' },
          { text: '从案例到教程', link: '/productization/from-case-to-tutorial' },
          { text: '从教程到信任', link: '/productization/from-tutorial-to-trust' },
          { text: '从信任到现金流', link: '/productization/from-trust-to-cashflow' }
        ]
      },
      {
        text: 'Principles',
        collapsed: false,
        items: [
          { text: '核心是需求判断', link: '/principles/demand-judgment' },
          { text: '连续调试', link: '/principles/continuous-debugging' },
          { text: '不要只收藏工具', link: '/principles/ship-results' },
          { text: '上线、收钱、复用', link: '/principles/launch-charge-reuse' },
          { text: '生产资料', link: '/principles/production-assets' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/leechunfang64-cyber/codex-for-everyone' }
    ],
    footer: {
      message: 'OpenAI Codex 实战手册：真实项目、真实排障、真实复用。',
      copyright: 'Content licensed under CC BY-NC-SA 4.0'
    }
  }
})
