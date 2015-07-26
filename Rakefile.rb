desc "Dump HTML for all test grammars"
task :test do
  Dir['grammars/*.rb'].each do |g|
    sh "ruby #{g} > #{g.sub('grammars/', 'html/').sub('.rb', '.html')}"
  end
end
